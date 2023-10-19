export interface NoticiasResponse {
    count: number;
    next?: string;
    previous?: string;
    results: Noticias[];

}

export interface Noticias {
    id?: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches?: Launches[];
    events?: Eventos[];
}

export interface Launches {
    launch_id: string;
    provider: string;
}

export interface Eventos {
    event_id: number,
    provider: string
}
