import s from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={s.main}>
            <h2 className={s.name}>LUMINARIA</h2>

            <p className={s.copyright}>© 2024 CodeByBeard</p>

            <p>Logo photo by <a href="https://unsplash.com/@sidkush?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">siddharth kushwaha</a> on <a href="https://unsplash.com/photos/lighted-candle-in-dark-room-7GPnPHRksDE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.</p>
        </footer>
    )
}