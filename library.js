class Book {
    constructor(author, title, numPages, alreadyRead, coverImage) {
        [this.author, this.title, this.numPages, this.alreadyRead, this.coverImage] = [...arguments];
        console.log(this);
    }

    makeBook() {
        const container = document.createElement("div");
        const coverImage = document.createElement("img");
        const title = document.createElement("strong");
        const otherInfo = document.createElement("p");
        const readBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        coverImage.src = this.coverImage;
        title.textContent = this.title;
        otherInfo.textContent = 
        `By: ${this.author} \<br\>
        ${this.numPages} pages
        `;
        
        container.appendChild(coverImage);
        container.appendChild(title);
        container.appendChild(otherInfo);
        
        return container;
    }
}


document.querySelector("#addBookBtn").onclick = () => {
    let bk = new Book("mary", "lambs", 33, true, "pic");
    let bkNew = bk.makeBook();
    document.querySelector("body").appendChild(bkNew);
};
