import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

export const getTailwindConfig = () => {
    return resolveConfig(tailwindConfig)
}
