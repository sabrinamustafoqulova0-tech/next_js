import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='text-center bg-[#f9f7f4] py-20 px-6'>
        <h1 className='font-semibold text-4xl mb-10 text-gray-900 tracking-[0.15em]'>
          ЛАВКА БУЛАВКА
        </h1>

        <div className='max-w-[720px] mx-auto space-y-8 text-gray-600 leading-8 text-[15px]'>
          <p>
            Техническая поддержка{" "}
            <span className='text-black font-medium border-b border-gray-300 hover:border-black transition'>
              info@lavkabulavka.com
            </span>
            <br/>
            (если вам не пришло письмо после оплаты или возникли технические сложности с доступом к материалам)
          </p>

          <p>
            Вопросы по процессу вязания изделий по мастер-классам{" "}
            <span className='text-black font-medium border-b border-gray-300 hover:border-black transition'>
              help.mk@lavkabulavka.com
            </span>
            <br/>
            (укажите в теме письма название мастер-класса, подробно опишите вопрос и прикрепите фото проблемного фрагмента)
            <br/><br/>
            <span className='text-gray-900 font-medium'>Ответ в течение 24 часов</span>
          </p>
        </div>
      </div>

      <div className='text-center bg-white py-20 px-6 border-t border-gray-200'>
        <h1 className='font-semibold text-4xl mb-10 text-gray-900 tracking-[0.15em]'>
          ДОСТАВКА
        </h1>

        <div className='max-w-[720px] mx-auto space-y-8 text-gray-600 leading-8 text-[15px]'>
          <p>
            После покупки мастер-класса письмо со ссылкой на него придет на указанный e-mail адрес в течение 24 часов. 
            Если Вы не получили письмо, напишите на почту{" "}
            <span className='text-black font-medium border-b border-gray-300 hover:border-black transition'>
              info@lavkabulavka.com
            </span>
          </p>

          <p>
            Товары из наличия отправляются в течение 1–3 рабочих дней, ТК СДЭК или Почтой России. 
            При покупке изделий «под заказ» учитывайте срок изготовления, указанный в описании товара.
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact