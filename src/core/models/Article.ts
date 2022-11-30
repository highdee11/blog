export default interface Article{
    id: number,
    date: string,
    slug: string,
    title: ContentInterface,
    content: ContentInterface,
    excerpt: ContentInterface,
    jetpack_featured_media_url: string,
    primary_category: Category
}

interface ContentInterface {
    rendered: string
}

interface Category {
    term_id: number,
    name: string,
}