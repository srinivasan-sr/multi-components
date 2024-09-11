export const LinksPathMap = {
    'password-strength': '/password-strength',
    'random-user': '/random-user',
    'disney-characters': '/disney-characters',
    'countdown-timer': '/countdown-timer',
    'drag-drop-list': '/drag-drop-list',
    'strikethrough-items': '/strikethrough-items',
    'image-carousel': '/image-carousel',
};

export const links = [
    {
        id: 'password',
        path: LinksPathMap['password-strength'],
        title: 'Password Strength',
        hidden: false,
        aria_label: 'password strength',
    },
    {
        id: 'random-user',
        path: LinksPathMap['random-user'],
        title: 'Random User',
        hidden: false,
        aria_label: 'random user'
    },
    {
        id: 'disney-characters',
        path: LinksPathMap['disney-characters'],
        title: 'Disney Characters',
        hidden: false,
        aria_label: 'disney characters listing'
    },
    {
        id: 'countdown-timer',
        path: LinksPathMap['countdown-timer'],
        title: 'Countdown Timer',
        hidden: false,
        aria_label: 'countdown timer'
    },
    {
        id: 'drag-drop-list',
        path: LinksPathMap['drag-drop-list'],
        title: 'Drag & Drop List',
        hidden: false,
        aria_label: 'drag and drop list items'
    },
    {
        id: 'strike-through-items',
        path: LinksPathMap['strikethrough-items'],
        title: 'Strikethrough items',
        hidden: false,
        aria_label: 'strikethrough a list of items'
    },
    {
        id: 'image-carousel',
        path: LinksPathMap['image-carousel'],
        title: 'Image Carousel',
        hidden: false,
        aria_label: 'loop through images in a list'
    }
]