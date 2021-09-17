

const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ii@ya.ru",
    id: 1,
    about: "Тут я рассказываю о себе, своих увлечениях и т.д",
    avatar: "https://th.bing.com/th/id/OIP.sz6C1lirzSN5bnOzPDoPEgAAAA?pid=ImgDet&rs=1",
};

const users={
    0:{name:"Юлия", lastname: "Петрова"},
    1:{name:"Константин", lastname: "Тетерин"},
    2:{name:"Петр", lastname: "Петров"},
    3:{name:"Олег", lastname: "Сидоров"},
    4:{name:"Анна", lastname: "Саблина"},

};

export function getUser() {
    return user;
}

export function getUsers() {
    return users;
}