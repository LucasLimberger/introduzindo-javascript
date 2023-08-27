import { Question } from "./PageFragment.js";
import data, { Topic, Page, appName } from "./data.js";

const rootElement = document.querySelector(":root")!;
const articleElement = document.querySelector("article")!;
const titleElement = document.querySelector("title")!;
const h1Element = document.querySelector("h1")!;
const h2Element = document.querySelector("h2")!;
// const sidebarElement: HTMLElement = document.querySelector("#sidebar")!;
const sidebarHeaderElement: HTMLElement = document.querySelector("#sidebar-nav-header")!;
const sidebarListElement: HTMLElement = document.querySelector("#sidebar-list")!;
const themeButton: HTMLButtonElement = document.querySelector("#theme-button")!;
const navMenuButton: HTMLButtonElement = document.querySelector("#nav-menu-button")!;
const navMenuList: HTMLElement = document.querySelector("#nav-menu")!;
const nextButtons: HTMLButtonElement[] = Array.from(document.querySelectorAll(".next-button"));
const previousButtons: HTMLButtonElement[] = Array.from(
    document.querySelectorAll(".previous-button")
);

let loadedTopic: Topic;
let loadedePage: Page | null = null;
let loadedTopicIndex = -1;
let loadedPageIndex = -1;
let furthestTopic = 0;
let furthestPage = 0;
let isQuestionDone = true;

setup();
loadFromLocalStorage();

function setup() {
    if (localStorage.getItem("theme") === null) {
        const darkMode = window?.matchMedia("(prefers-color-scheme: dark)").matches ?? true;
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
    if (localStorage.getItem("theme") === "dark") {
        rootElement.classList.add("dark");
    }

    articleElement.addEventListener("custom:questionanswered", event => {
        //@ts-ignore
        if (event.detail.isCorrect) {
            isQuestionDone = true;
            const isLastPage =
                loadedTopic === data.at(-1) && loadedePage === loadedTopic.pages.at(-1);
            if (!isLastPage) {
                nextButtons.forEach(button => (button.disabled = false));
            }
            saveToLocalStorage();
        }
    });

    for (const button of previousButtons) {
        button.addEventListener("click", () => {
            if (loadedPageIndex > 0) {
                loadPage(loadedTopicIndex, loadedPageIndex - 1);
            } else {
                loadPage(loadedTopicIndex - 1, data[loadedTopicIndex - 1].pages.length - 1);
            }
        });
    }

    for (const button of nextButtons) {
        button.addEventListener("click", () => {
            if (loadedTopic.pages[loadedPageIndex + 1] !== undefined) {
                loadPage(loadedTopicIndex, loadedPageIndex + 1);
            } else {
                loadPage(loadedTopicIndex + 1, 0);
            }
        });
    }

    themeButton.addEventListener("click", event => {
        rootElement.classList.toggle("dark");
        localStorage.setItem("theme", rootElement.classList.contains("dark") ? "dark" : "light");
    });

    sidebarListElement.addEventListener("click", event => {
        if (event.target === null) return;

        const source = event.target as HTMLElement;
        if (source.classList.contains("current")) {
            scrollTo(0, 0);
            return;
        }
        if (!source.classList.contains("complete") && !source.classList.contains("incomplete")) {
            return;
        }
        if (!("pageIndex" in source.dataset)) {
            return;
        }
        const itemIndex = Number(source.dataset.pageIndex);
        loadPage(loadedTopicIndex, itemIndex);
    });

    navMenuButton.addEventListener("click", event => {
        if (navMenuList.childElementCount > 0) {
            clearNavMenu();
            return;
        }
        navMenuList.classList.remove("hidden");
        for (let i = 0; i <= furthestTopic; i++) {
            const li = document.createElement("li");
            const sublist = document.createElement("ol");
            sublist.className = "nav-list";
            sublist.dataset.topicIndex = i.toString();
            const header = document.createElement("header");
            header.className = "nav-header";
            header.innerText = data[i].title;
            sublist.append(header);
            sublist.append(...createNavList(i));
            li.append(sublist);
            navMenuList.append(li);
        }
    });

    document.body.addEventListener("keydown", event => {
        if (event.code === "Escape" && navMenuList.childElementCount > 0) {
            clearNavMenu();
        }
    });

    navMenuList.addEventListener("click", event => {
        if (event.target === null) return;

        const source = event.target as HTMLElement;
        if (source.classList.contains("current")) {
            scrollTo(0, 0);
            clearNavMenu();
            return;
        }
        if (!source.classList.contains("complete") && !source.classList.contains("incomplete")) {
            return;
        }
        if (!("pageIndex" in source.dataset)) {
            return;
        }
        const itemIndex = Number(source.dataset.pageIndex);
        const topicIndex = Number(source.parentElement!.parentElement!.dataset.topicIndex);
        clearNavMenu();
        loadPage(topicIndex, itemIndex);
    });
}

function clearNavMenu() {
    navMenuList.replaceChildren();
    navMenuList.classList.add("hidden");
}

function saveToLocalStorage() {
    localStorage.setItem("topic", loadedTopicIndex.toString());
    localStorage.setItem("page", loadedPageIndex.toString());
    localStorage.setItem("isQuestionDone", Number(isQuestionDone).toString());
    localStorage.setItem("furthestTopic", furthestTopic.toString());
    localStorage.setItem("furthestPage", furthestPage.toString());
}

function loadFromLocalStorage() {
    if (localStorage.getItem("topic") === null) {
        localStorage.setItem("topic", "0");
        localStorage.setItem("page", "0");
        localStorage.setItem("isQuestionDone", "1");
        localStorage.setItem("furthestTopic", "0");
        localStorage.setItem("furthestPage", "0");
    }
    furthestTopic = Number(localStorage.getItem("furthestTopic"));
    furthestPage = Number(localStorage.getItem("furthestPage"));
    isQuestionDone = Boolean(Number(localStorage.getItem("isQuestionDone")));
    loadPage(Number(localStorage.getItem("topic")), Number(localStorage.getItem("page")));
}

function loadPage(newTopicIndex: number, newPageIndex: number) {
    if (loadedePage !== null) {
        for (const item of loadedePage.contents) {
            item.removeHTML();
        }
    }

    const topicChanged = newTopicIndex !== loadedTopicIndex;
    loadedTopicIndex = newTopicIndex;
    loadedPageIndex = newPageIndex;
    loadedTopic = data[loadedTopicIndex];
    loadedePage = loadedTopic.pages[loadedPageIndex];

    articleElement.append(...loadedePage.contents.map(fragment => fragment.getHTML()));

    //título, barra lateral
    if (topicChanged) {
        titleElement.innerText = `${appName} | ${loadedTopic.title}`;
        h1Element.innerText = loadedTopic.title;
        sidebarHeaderElement.innerText = loadedTopic.title;
    }
    h2Element.innerText = loadedePage.subtitle;
    sidebarListElement.replaceChildren(...createNavList(loadedTopicIndex));

    //questão
    const question = (loadedePage.contents.find(fragment => fragment instanceof Question) ??
        null) as Question | null;

    let atFurthestPage = loadedTopicIndex === furthestTopic && loadedPageIndex === furthestPage;
    if (
        loadedTopicIndex > furthestTopic ||
        (loadedTopicIndex === furthestTopic && loadedPageIndex > furthestPage)
    ) {
        //página nova
        furthestTopic = loadedTopicIndex;
        furthestPage = loadedPageIndex;
        atFurthestPage = true;
        isQuestionDone = question === null;
    }
    if (isQuestionDone || !atFurthestPage) {
        question?.markAsSolved();
    }

    //botões de navegação
    const disablePreviousButton = newTopicIndex === 0 && loadedPageIndex === 0;
    previousButtons.forEach(button => (button.disabled = disablePreviousButton));

    const isLastPage = loadedTopic === data.at(-1) && loadedePage === loadedTopic.pages.at(-1);
    const disableNextButton = (atFurthestPage && !isQuestionDone) || isLastPage;
    nextButtons.forEach(button => (button.disabled = disableNextButton));

    saveToLocalStorage();

    scrollTo(0, 0);
}

function createNavList(topicIndex: number) {
    return data[topicIndex].pages.map((page, i) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.className = "sidebar-button";
        button.innerText = page.subtitle;
        button.dataset.pageIndex = i.toString();
        if (page === loadedePage) {
            button.classList.add("current");
        }

        if (topicIndex < furthestTopic) {
            button.classList.add("complete");
        } else if (topicIndex === furthestTopic) {
            if (i < furthestPage) {
                button.classList.add("complete");
            } else if (i === furthestPage) {
                button.classList.add(isQuestionDone ? "complete" : "incomplete");
            } else {
                button.disabled = true;
            }
        }
        li.append(button);
        return li;
    });
}
