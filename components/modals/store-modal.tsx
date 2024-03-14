'use client';

import { useStoreModal } from '@/hooks/use-store-modal';
import Modal from '@/components/ui/modal';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  // Is from the zustand global state management tool
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  // From the documentation of shadcn forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    try {
      // ensure button cannot be clicked during loading
      setLoading(true);

      const response = await axios.post('/api/stores', values);

      console.log(response.data);

      toast.success('Store created successfully');

    } catch (error) {
      toast.error('An error occurred')
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title='Create Store'
      description='Add a new store to manage products and categories'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className='space-y-4 py-2 pb-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      {/* not handle the effect by spread the field property */}
                      <Input disabled={loading} placeholder='E-commerce store' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Move two button towared the end, give x-2 space bewteen */}
              <div className='flex justify-end pt-6 space-x-2 items-center'>
                <Button variant={'outline'} onClick={storeModal.onClose} disabled={loading}>
                  Cancel
                </Button>
                <Button type='submit' disabled={loading}>Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
