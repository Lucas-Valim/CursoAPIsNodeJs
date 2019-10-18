const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env){
        case 'dev':
        return {
            bd_string: 'mongodb+srv://usuario_admin:f9uifEqNps0w6psS@clusterapi-qkf5f.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'batatafrita2019',
            jwt_expiresIn: '7d'
        }
        case 'hm1':
        return{
            bd_string: 'mongodb+srv://usuario_admin:f9uifEqNps0w6psS@clusterapi-qkf5f.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'batatafrita2019',
            jwt_expiresIn: '7d'
        }
        case 'prod':
        return{
            bd_string: 'mongodb+srv://usuario_admin:f9uifEqNps0w6psS@clusterapi-qkf5f.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'fçwdkhvkjwdlvqjbdvçqjdfbv',
            jwt_expiresIn: '7d'
        }
    }
}

console.log(`Iniciando a API em abiente ${env.toUpperCase()}`);

module.exports = config();