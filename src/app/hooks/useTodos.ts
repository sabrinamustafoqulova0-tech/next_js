import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { api } from '../lib/api'

export interface Todo {
  name: string
  status: boolean
  img: string
  about: string
  id: string
}

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],

    queryFn: async () => {
      const res = await api.get('')
      return res.data as Todo[]
    },
  })
}

export const useAddTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (name: string) => {
      const res = await api.post('', {
        name,
        status: false,
        img: '',
        about: '',
      })

      return res.data
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/${id}`)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (todo: Todo) => {
      const res = await api.put(`/${todo.id}`, todo)

      return res.data
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })
}