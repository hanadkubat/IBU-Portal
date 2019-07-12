export const articles = [
    {
        id: 5544,
        date: new Date().getDate(),
        title: 'Test news',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        img: ''
    }
]

export const comments = [
    {
        id: 111,
        userId: 2,
        userName: '',
        articleId: 5544,
        approved: true,
        pending: false,
        content: 'nismo zadovoljni portalom'

    }
]

export const users = [
    {
        id: 1,
        username: 'Skika',
        admin: true,
        img: ''
    }
]