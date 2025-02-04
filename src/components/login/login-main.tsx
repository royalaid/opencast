import { Button } from '@components/ui/button';
import { CustomIcon } from '@components/ui/custom-icon';
import { NextImage } from '@components/ui/next-image';
import { Dialog } from '@headlessui/react';
import { useModal } from '../../lib/hooks/useModal';
import { Modal } from '../modal/modal';
import WarpcastAuthPopup from './sign-in-with-warpcast';

export function LoginMain(): JSX.Element {
  const { openModal, closeModal, open } = useModal();

  const signInWithWarpcast = () => {
    openModal();
  };

  return (
    <main className='grid lg:grid-cols-[1fr,45vw]'>
      <div className='relative hidden items-center justify-center  lg:flex'>
        <NextImage
          imgClassName='object-cover'
          blurClassName='bg-accent-blue'
          src='/assets/twitter-banner.png'
          alt='Opencast banner'
          layout='fill'
          useSkeleton
        />
        <i className='absolute'>
          <CustomIcon className='h-96 w-96 text-white' iconName='TwitterIcon' />
        </i>
      </div>
      <Modal
        className='flex items-start justify-center'
        modalClassName='bg-main-background rounded-2xl max-w-xl p-4 overflow-hidden flex justify-center'
        open={open}
        closeModal={closeModal}
      >
        <div>
          <div className='flex flex-col gap-2'>
            <div className='flex'>
              <Dialog.Title className='flex-grow text-xl font-bold'>
                Sign in with Warpcast
              </Dialog.Title>
              <button onClick={closeModal}>x</button>
            </div>

            <Dialog.Description className='text-light-secondary dark:text-dark-secondary'>
              Scan the QR code with the camera app on your device with Warpcast
              installed.
            </Dialog.Description>
          </div>
          <div className='flex justify-center p-8'>
            <WarpcastAuthPopup></WarpcastAuthPopup>
          </div>
        </div>
      </Modal>
      <div className='flex flex-col items-center justify-between gap-6 p-8 lg:items-start lg:justify-center'>
        <i className='mb-0 self-center lg:mb-10 lg:self-auto'>
          <CustomIcon
            className='-mt-4 h-6 w-6 text-accent-blue lg:h-12 lg:w-12 dark:lg:text-twitter-icon'
            iconName='TwitterIcon'
          />
        </i>
        <div className='flex max-w-xs flex-col gap-4 font-twitter-chirp-extended lg:max-w-none lg:gap-16'>
          <h1
            className='text-3xl before:content-["See_what’s_happening_in_the_world_right_now."] 
                       lg:text-6xl lg:before:content-["Happening_now"]'
          />
          <h2 className='hidden text-xl lg:block lg:text-3xl'>
            Use Opencast today.
          </h2>
        </div>
        <div className='flex max-w-xs flex-col gap-6 [&_button]:py-2'>
          <div className='grid gap-3 font-bold'>
            <Button
              className='flex justify-center gap-2 border border-light-line-reply font-bold text-light-primary transition
                         hover:bg-[#e6e6e6] focus-visible:bg-[#e6e6e6] active:bg-[#cccccc] dark:border-0 dark:bg-white
                         dark:hover:brightness-90 dark:focus-visible:brightness-90 dark:active:brightness-75'
              onClick={signInWithWarpcast}
            >
              <CustomIcon iconName='TriangleIcon' /> Sign up with Warpcast
            </Button>
            <p
              className='inner:custom-underline inner:custom-underline text-center text-xs
                         text-light-secondary inner:text-accent-blue dark:text-dark-secondary'
            >
              By signing up you agree that you are doing so at your own risk.
              {/* By signing up, you agree to the{' '}
              <a
                href='https://twitter.com/tos'
                target='_blank'
                rel='noreferrer'
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href='https://twitter.com/privacy'
                target='_blank'
                rel='noreferrer'
              >
                Privacy Policy
              </a>
              , including{' '}
              <a
                href='https://help.twitter.com/rules-and-policies/twitter-cookies'
                target='_blank'
                rel='noreferrer'
              >
                Cookie Use
              </a> 
              .*/}
            </p>
          </div>
          {/* <div className='flex flex-col gap-3'>
            <p className='font-bold'>Already have an account? </p>
            <Button
              className='border border-light-line-reply font-bold text-accent-blue hover:bg-accent-blue/10
                         focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80 active:bg-accent-blue/20
                         dark:border-light-secondary'
              onClick={signInWithGoogle}
            >
              Sign in
            </Button>
          </div> */}
        </div>
      </div>
    </main>
  );
}
