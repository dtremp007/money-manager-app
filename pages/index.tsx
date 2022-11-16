import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { ServerStyles, createStylesServer } from '@mantine/next';
import Button from './components/button'
import { Center } from '@mantine/core';
import Imagedemo from './components/background'
import { Space } from '@mantine/core';
import Homebutton from './components/homebutton'

export default function Home() {
  return (
    <div>
      
      <title>Money-Manager</title>
      <Center>
      <h1 className='title'>Money Managing System</h1>
      </Center>
      
      <Button></Button>
      <Space h="xl" />
      <Imagedemo></Imagedemo>

    </div>
  )
}
