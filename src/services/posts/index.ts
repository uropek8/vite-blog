import http from '@/api/axios-client'
import Post from '@/types/Post'

class PostDataService {
  getAll(): Promise<any> {
    return http.get('/posts')
  }

  get(id: string): Promise<any> {
    return http.get(`/posts/${id}`)
  }

  create(data: Post): Promise<any> {
    return http.post('/posts', data)
  }

  update(id: string, data: Post): Promise<any> {
    return http.put(`/posts/${id}`, data)
  }

  delete(id: string): Promise<any> {
    return http.delete(`/posts/${id}`)
  }
}

export default new PostDataService()
