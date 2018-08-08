import mongoose from 'mongoose'

export function openConnection(){
    mongoose.connect('mongodb://WilliansVpf:jiromba10@ds259711.mlab.com:59711/express-server-db')
}
