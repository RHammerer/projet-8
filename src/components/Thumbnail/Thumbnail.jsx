import './thumbnail.css';

export default function Thumbnail({ appart }) {
    return (
        <figure className='thumbnail'>
            <img src={appart.cover} alt={appart.title} />
            <figcaption>{appart.title}</figcaption>
        </figure>
    )
}