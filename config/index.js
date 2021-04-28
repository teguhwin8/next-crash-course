const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://mystifying-hodgkin-fef6c8.netlify.app'