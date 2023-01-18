export type Game = {
  appId?: string,  
  title?: string,
  url?: string,
  imgUrl?: string,
  released?: string,
  reviewSummary?: string,
  price?: string
}

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}
