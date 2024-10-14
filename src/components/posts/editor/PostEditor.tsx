'use client'

import {EditorContent, useEditor} from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import PLaceholder, { Placeholder } from '@tiptap/extension-placeholder'
import { submitPost } from '../action';
import UserAvatar from '@/components/ui/UserAvatar';
import { useSession } from '@/app/(main)/SessionProvider';
import { Button } from '@/components/ui/button';
import './style.css'

export default function PostEditor(){
    const {user} = useSession()
    const editor = useEditor ({
        extensions:[
            StarterKit.configure({
                bold: false,
                italic: false
            }),
            Placeholder.configure({
                placeholder: 'Write something...'
            })
        ]
    })

    const input = 
    editor?.getText({
        blockSeparator: '/n',
    }) || '';
    async function onSubmit(){
        await submitPost (input)
        editor?.commands.clearContent()
    }

     return <div
     className='flex
     flex-col
     gap-5
     rounded-2xl
     bg-card
     p-5
     shadow-sm'>
        <div className='flex
        gap-5'>
            <UserAvatar avatarUrl={user?.avatarUrl} className='hidden sm:inline'/>
            <EditorContent editor={editor}
            className='w-full
            max-h-[20rem] 
            overflow-auto
            bg-background
            rounded-2xl
            px-5
            py-3'/>
        </div>
        <div className='
        flex
        justify-end'>
            <Button onClick={onSubmit}
            disabled={!input.trim()}
            className='min-w-28'>Post</Button>

        </div>

     </div>
}