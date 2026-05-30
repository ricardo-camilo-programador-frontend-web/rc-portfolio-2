export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: Array<string>
  link: string
  metrics?: string
  comingSoon?: boolean
  year?: string
}
