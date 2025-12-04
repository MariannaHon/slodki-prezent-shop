
import Image from "next/image"

const PopularBlogCard = () => {
  return (
    <div>
        <Image
        priority
        src="/images/gift.png"
        width="580"
        height="384"
        alt="People creating sweet presents"
        />
        <div>
              <h4>Jak wybrać idealny prezent dla klienta biznesowego?</h4>
              <p>Wszystkie</p>
              <p>12 Maja 2023</p>
        </div>
    </div>
  )
}

export default PopularBlogCard
