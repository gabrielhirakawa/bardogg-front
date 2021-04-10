import { ReactNode } from 'react'
import { useRouter } from 'next/router'

type Props = {
  children: ReactNode
}

export default function SignedLayout({ children }: Props) {
  const router = useRouter()
  let signed = false

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('bardo_token')
    console.log('opa', signed)
    if (!token) {
      signed = false

      router.push('/')
    } else {
      signed = true
    }
  }

  return <>{signed ? children : <></>}</>
}
