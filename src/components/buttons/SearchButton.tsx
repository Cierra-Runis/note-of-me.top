'use client';

import { Link as NextLink } from '@/i18n/routing';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';
import { Input } from '@heroui/input';
import { Kbd } from '@heroui/kbd';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';
import { allPosts } from 'contentlayer/generated';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function SearchButton() {
  const t = useTranslations();
  const [search, setSearch] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    onClose: () => setSearch(''),
  });

  const filteredPosts = allPosts.filter((post) =>
    post.body.raw.includes(search),
  );

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        size='sm'
        startContent={<MagnifyingGlassIcon className='w-5' />}
        variant='light'
      />
      <Modal
        hideCloseButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior='inside'
        size='5xl'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <Input
                  endContent={<Kbd keys={'escape'} />}
                  onValueChange={setSearch}
                  startContent={<MagnifyingGlassIcon className='w-5' />}
                  value={search}
                  variant='faded'
                />
              </ModalHeader>

              <Divider />

              <ModalBody>
                {filteredPosts.length == 0 ? (
                  <p className='text-center'>{t('noData')}</p>
                ) : (
                  filteredPosts.map((post) => (
                    <NextLink
                      className='prose mb-8 flex max-w-full flex-col items-start justify-center gap-2 dark:prose-invert'
                      href={post.url}
                      key={post.url}
                      onClick={onClose}
                      prefetch
                    >
                      <h3>{post.title}</h3>
                      <p className='line-clamp-3 break-all'>
                        {post.body.raw.substring(post.body.raw.indexOf(search))}
                      </p>
                    </NextLink>
                  ))
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
