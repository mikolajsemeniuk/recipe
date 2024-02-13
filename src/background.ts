
export interface Ingredient {
    value: string,
    unit: string,
    ingredient: string
}

export const sum = (x: string): Ingredient[] => {
    return [{ value: x, unit: x, ingredient: x }]
}

console.log(sum("x"))

// const recipe = (): string => {
//     const selector = "h1.recipe-card__title"
//     const element = document.querySelector(selector)
//     if (element === null) {
//         return ""
//     }

//     return (element as HTMLElement).innerText
// }

// chrome.storage.sync.set({ 'recipe': recipe() });

// interface Ingredient {
// value: string,
// unit: string,
// ingredient: string
// }

// const ingredients = (): Ingredient[] => {
//     const selector = "#ingredients-0"
//     const element = document.querySelector(selector);
//     const re = /(\d+) ([a-zA-Z]) (.+)/

//     if (!element || !element.children) {
//         return [];
//     }

//     return Array.from(element.children).map(v => {
//         const items = v.innerText.match(re).slice(1)
//         if (items.length != 3) {
//             return { value: "", unit: "", ingredient: "" }
//         }
//         return { value: items[0], unit: items[1], ingredient: items[2] }
//     })
// }

// chrome.storage.sync.set({ 'ingredients': ingredients() });
