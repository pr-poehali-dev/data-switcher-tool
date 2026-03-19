import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Что такое ТрекФлит и для кого он предназначен?",
    answer:
      "ТрекФлит — это телематическая платформа для мониторинга транспорта и автоматического выставления счетов. Подходит для компаний, предоставляющих услуги GPS-мониторинга юридическим лицам: логистика, строительство, муниципальный транспорт, такси-парки.",
  },
  {
    question: "Как работает биллинг по количеству объектов?",
    answer:
      "Стоимость услуги рассчитывается автоматически на основе числа транспортных средств, подключённых к системе. Каждый месяц оператор-бухгалтер получает готовые счета для каждого клиента — без ручного пересчёта.",
  },
  {
    question: "Кто такой оператор-бухгалтер и что он делает в системе?",
    answer:
      "Оператор-бухгалтер — сотрудник, ответственный за расчёты с клиентами. В платформе у него отдельный кабинет: список клиентов, количество объектов по каждому, статус оплаты и кнопка выставления счёта.",
  },
  {
    question: "Можно ли подключить к платформе любые GPS-трекеры?",
    answer:
      "Да, платформа поддерживает подключение популярных протоколов телематики. Вы можете использовать оборудование разных производителей — мы поможем с настройкой интеграции.",
  },
  {
    question: "Как хранятся и защищаются данные о транспорте?",
    answer:
      "Все данные о местоположении и маршрутах хранятся в защищённых дата-центрах. Доступ разграничен по ролям: клиент видит только свои объекты, оператор — всех клиентов.",
  },
  {
    question: "Как быстро можно подключить клиента к платформе?",
    answer:
      "Подключение нового клиента занимает от 15 минут: создаёте аккаунт, привязываете объекты (транспортные средства) и настраиваете тариф. Наша команда помогает на каждом этапе.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Левая колонка - заголовок */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Часто задаваемые вопросы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Всё о мониторинге транспорта,
            <br className="hidden md:block" />
            биллинге и работе платформы.
          </div>
        </div>

        {/* Правая колонка - FAQ */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}