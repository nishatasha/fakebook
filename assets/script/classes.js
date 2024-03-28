class User {
    constructor(id, name, userName, email) {
        this._id = id;
        this._name = name;
        this._userName = userName;
        this._email = email;
    }

    getInfo() {
        return `
            <p>ID: ${this._id}</p>
            <p>Name: ${this._name}</p>
            <p>Username: ${this._userName}</p>
            <p>Email: ${this._email}</p>
        `;
    }
}

class Subscriber extends User {
    constructor(id, name, userName, email, groups, pages, canMonetize) {
        super(id, name, userName, email);
        this._groups = groups;
        this._pages = pages;
        this._canMonetize = canMonetize;
    }

    getInfo() {
        return `
            <p><i class="fa-solid fa-circle-info"></i> DETAILS</p>
            ${super.getInfo()}
            <p>Groups: ${this._groups.join(', ')}</p>
            <p>Pages: ${this._pages.join(', ')}</p>
            <p>Can Monetize: ${this._canMonetize ? 'Yes' : 'No'}</p>
            <p> CLICK ABOVE IMAGE TO CLOSE </p>`;
    }
}

export { User, Subscriber };
