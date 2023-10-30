export interface IModalProps {
  isOpen: boolean;
  onCloseRequest(data: object): void;
}

export interface ICategoryItem {
  id: number
  href: string
  title: string
  news: string
  info: string
  image: '/images/img/data.svg'
}