import './banner.css'

export default function Banner({url, title = null}) {
    return (
        <section className='section-banner'>

        <div className="banner">
            <img src={url} alt="photo de la banniere" />
            {title && <h2>{title}</h2>}
        </div>
        </section>
    )
}