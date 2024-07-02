import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'xf91765w',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
});

export const sanityFetch = async ({ query, params = {}, tags }) => {
    return client.fetch(query, params, {
        next: {
            revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
            tags,
        },
    });
};

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
