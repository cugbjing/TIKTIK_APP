import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'qz6s7mno',
  dataset: 'production',
  apiVersion: '2023-02-23',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});