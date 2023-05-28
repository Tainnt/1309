import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/static/images/Cover.png"
          alt="Cover"
          width={1154}
          height={800}
        />
        <Image
          src="/static/images/Page-1.png"
          alt="Page-1"
          width={638}
          height={938}
        />
        <Image
          src="/static/images/Page-2.png"
          alt="Page-2"
          width={638}
          height={938}
        />
        <div style={{padding: '10px 0', color: 'white'}}>
          <div style={{textAlign: 'center', paddingBottom: 10, fontSize: 14}}>
            <h3>Hoa viên Vườn Cau</h3>
            <p>755 Nguyễn Duy Trinh,</p>
            <p>Phường Phú Hữu, Tp. Thủ Đức.</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <a href="https://goo.gl/maps/9USnjcoqCGmpNGgb6" style={{display: 'flex', justifyContent: 'center'}}>
              <img style={{ borderRadius: 5, width: '80%' }} src="/static/images/Restaurant-map.png" alt="Hoa vien Vuon Cau" />
            </a>
            <a href="https://goo.gl/maps/9USnjcoqCGmpNGgb6" style={{
              maxWidth: '75vw',
              overflowX: 'hidden',
              textOverflow: 'ellipsis',
              marginTop: 10,
            }}>
            <a>https://goo.gl/maps/9USnjcoqCGmpNGgb6</a>
            </a>
          </div>
        </div>
        <div style={{padding: '10px 0', color: 'white', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <div style={{textAlign: 'center', paddingBottom: 10, fontSize: 14}}>
            <h3>Techcombank</h3>
            <p>NGUYEN THI THUY TRANG</p>
            <p>1903 5190 1590 18</p>
          </div>
          <img style={{ borderRadius: 5, width: '40%' }} src="/static/images/qrcode.png" alt="QC Code" />
        </div>
      </div>
    </main>
  )
}
