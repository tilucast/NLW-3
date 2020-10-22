import Image from '../models/Image'
import orphanages_view from './orphanages_view'

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://192.168.2.15:3333/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image))
    }
}