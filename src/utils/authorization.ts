import Cookies from 'js-cookie'

const authorization = () => {
    if (Cookies.get('token')) {
        return {
            headers: {
                Authorization: `Token ${Cookies.get('token')}`
            }
        }
    } else {
        console.log('error get token');
        return {}
    }
}

export default authorization