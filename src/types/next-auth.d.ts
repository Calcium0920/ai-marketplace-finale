// src/types/next-auth.d.ts - NextAuth型定義拡張
import 'next-auth'
import { User as ProfileUser } from './marketplace'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      profile?: ProfileUser
    }
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    profile?: ProfileUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    sub?: string
    profile?: ProfileUser
  }
}