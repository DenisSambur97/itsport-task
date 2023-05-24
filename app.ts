interface ResData {
    userId: number
    id: number
    title: string
    body: string
}

class FifteenthTitle {
    static #URL = 'https://jsonplaceholder.typicode.com/posts'
    static #ID = 15

    static #get() {
        fetch(FifteenthTitle.#URL)
            .then(res => {
                if (res.ok){
                    return res.json() // Добавляем ключевое слово return перед res.json()
                }
            })
            .then(resData => FifteenthTitle.#getTitleFromJson(resData))
            .then(title => console.log(title))
            .catch(({message}) => console.error(message))
    }

    static #getTitleFromJson(resData: ResData[]) {
        const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID) // Добавляем метод find
        const title = itemWithTitle.title

        return title // Добавляем ключевое слово return перед title
    }

    run() {
        FifteenthTitle.#get()
    }
}

const fifteenthTitle = new FifteenthTitle()
fifteenthTitle.run()