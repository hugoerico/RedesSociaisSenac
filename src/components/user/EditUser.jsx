import React, { useState, useRef, useContext } from 'react'
import { UserContext } from '../../auth';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../graphql/user/mutation';
//import { UPDATE_USER } from './query';




const EditUser = ({ isEditUser }) => {

    const { currentUser } = useContext(UserContext);
    const [updateUser] = useMutation(UPDATE_USER);
    const [nameUser, setNameUser] = useState('')
    const image = useRef();

    if (isEditUser) {
        const element = document.getElementById('EditUser')

        if (!element.classList.contains('show')) {
            new window.bootstrap.Modal(element).show();
            setNameUser(currentUser.name)
        }


    }



    const uploadImage = async () => {
        const mockData = new FormData();

        mockData.append('file', image.current.files[0])
        mockData.append('upload_preset', 'senacgram')
        mockData.append('cloud_name', 'hugoerico')

        const response = await fetch('http://api.cloudinary.com/v1_1/hugoerico/image/upload', {
            method: 'POST',
            accept: 'applicaton/json',
            body: mockData
        })

        const respJson = await response.json();

        return respJson.url
    }

    const updateUsuario = async () => {

        const imageURl = await uploadImage()

        const objetoPost = {
            name: nameUser,
            image: imageURl,
            id: currentUser.id
        }

        updateUser({
            variables: objetoPost
        })
        alert("Perfil atualizado, recarregue a pagina!")


    }

    return (
        <div className="modal" id="EditUser" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Editar Usuário</h5>
                        <button type="button" className="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input value={nameUser} onChange={e => setNameUser(e.target.value)} placeholder='Digite seu nome' className='form-control my-2' />

                        <input type="file" className='form-control my-2' ref={image} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={updateUsuario}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser