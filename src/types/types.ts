export type IGame = {
  appId?: string,  
  title?: string,
  url?: string,
  imgUrl?: string,
  released?: string,
  reviewSummary?: string,
  price?: string
}

export type IPost = {
  userId: number,
  id: number,
  title: string,
  body: string,
}
