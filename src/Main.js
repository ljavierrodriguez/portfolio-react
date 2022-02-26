import React, { useState } from 'react';
import { FaCss3, FaEnvelope, FaFacebook, FaGit, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaPhone, FaPython, FaTwitter, FaUser } from 'react-icons/fa';
import AboutMe from './components/AboutMe';
import Carousel from './components/Carousel';
const Main = () => {
    // const [variable, function] = useState(valorInicial);
    // ejemplo: const [name, setName ] = useState("Luis");

    const [contentCarousel, setContentCarousel] = useState([
        "https://picsum.photos/id/1000/1920/1080?grayscale",
        "https://picsum.photos/id/768/1920/1080?grayscale",
        "https://picsum.photos/id/569/1920/1080?grayscale"
    ])

    const [aboutMe, setAboutMe] = useState({
        name: 'Luis J.',
        lastname: 'Rodriguez O.',
        biography: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        rrss: [
            { icon: <FaEnvelope />, url: 'mailto:ljavierrodriguez@gmail.com', text: 'ljavierrodriguez@gmail.com' },
            { icon: <FaPhone />, url: 'tel:+56930301111', text: '+56 9 3030 11 11' },
            { icon: <FaLinkedin />, url: 'https://linkedin.com/in/luisjrodriguezo', text: 'luisjrodriguezo' },
            { icon: <FaFacebook />, url: 'https://facebook.com/ljavierrodriguez', text: 'ljavierrodriguez' },
            { icon: <FaInstagram />, url: 'https://instagram.com/ljavierrodriguez', text: 'ljavierrodriguez' },
            { icon: <FaTwitter />, url: 'https://twitter.com/luisjrodriguezo', text: 'luisjrodriguezo' }
        ]
    })

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");

    const randomImage = () => {
        //console.log("Cargando nueva imagen aleatoria");
        //let image = "url/id/<id>/<width>/<height>?grayscale";
        let idRandom = Math.floor(Math.random() * 1000) + 1;
        let image = `https://picsum.photos/id/${idRandom}/1920/1080?grayscale`;
        //console.log(image);

        setContentCarousel([...contentCarousel, image])
    }

    const guardarDatos = e => {
        e.preventDefault();
        /* const form = e.target;
        const { name } = form;
        console.log(form.name.value);

        setAboutMe({...aboutMe, name: name.value }); */

        /* const newAboutMe = {...aboutMe};
        newAboutMe.name = form.name.value;
        setAboutMe(newAboutMe); */

        setAboutMe({ ...aboutMe, name: name, lastname: lastname });
        setName("");
        setLastname("");

    }

    const handleChange = e => {
        const {id, value} = e.target;
        const newAboutMe = {...aboutMe};
        newAboutMe[id] = value;
        setAboutMe(newAboutMe);
    }

    return (
        <>
            <Carousel contentCarousel={contentCarousel} />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-2">
                            <button className='btn btn-primary' onClick={randomImage}>
                                Agregar Imagen
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <AboutMe aboutMe={aboutMe} Component={FaUser} />
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={guardarDatos}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name:</label>
                                    {/* <input type="text" className="form-control" name="name" id="name" placeholder="Insert name" value={name} onChange={e => setName(e.target.value)} /> */}
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Insert name" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Lastname:</label>
                                    <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Insert lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name:</label>
                                    {/* <input type="text" className="form-control" name="name" id="name" placeholder="Insert name" value={name} onChange={e => setName(e.target.value)} /> */}
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Insert name" value={aboutMe.name} onChange={handleChange} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Lastname:</label>
                                    <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Insert lastname" value={aboutMe.lastname} onChange={handleChange} />
                                </div>
                                <div className="d-grid">
                                    <button className='btn btn-success gap-2'>
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="knowledge">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="icon px-5">
                                        <FaHtml5 size={50} />
                                    </div>
                                    <div className="pro" style={{ width: '100%' }}>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={0}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="icon px-5">
                                        <FaJs size={50} />
                                    </div>
                                    <div className="pro" style={{ width: '100%' }}>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={0}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '85%' }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="icon px-5">
                                        <FaCss3 size={50} />
                                    </div>
                                    <div className="pro" style={{ width: '100%' }}>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={0}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '90%' }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="icon px-5">
                                        <FaPython size={50} />
                                    </div>
                                    <div className="pro" style={{ width: '100%' }}>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={0}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '75%' }}
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="icon px-5">
                                        <FaGit size={50} />
                                    </div>
                                    <div className="pro" style={{ width: '100%' }}>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={0}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                                style={{ width: '80%' }}
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-5"></div>
        </>

    )
}

export default Main;