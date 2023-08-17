import SignInForm from '@/components/views/signInForm'
import ContextWrapper from '@/global/Context'
import React from 'react'

const SignIn = () => {
  return (
    <ContextWrapper>
        <SignInForm/>
    </ContextWrapper>
  )
}

export default SignIn