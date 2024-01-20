import './App.css';
import FilmCard from './components/FilmCard/FilmCard';
import { useState } from 'react';


const movies = [
	{
		title: "Побачення зі звірям",
		year: 2017,
		mainActor: "Саллі Хокінс",
		genre: "Фентезі",
		country: "США",
		photo: "https://placekitten.com/201/301",
		interesting: false
	},
	{
		title: "Форрест Гамп",
		year: 1994,
		mainActor: "Том Генкс",
		genre: "Драма",
		country: "США",
		photo: "https://placekitten.com/202/302",
		interesting: true
	},
	{
		title: "Інтерстеллар",
		year: 2014,
		mainActor: "Меттью МакКонахі",
		genre: "Наукова фантастика",
		country: "США",
		photo: "https://placekitten.com/203/303",
		interesting: false
	},
	{
		title: "Хранителі",
		year: 2009,
		mainActor: "Джекі Ерл Гейли",
		genre: "Екшн",
		country: "США",
		photo: "https://placekitten.com/204/304",
		interesting: true
	},
	{
		title: "Джокер",
		year: 2019,
		mainActor: "Хоакін Фенікс",
		genre: "Трилер",
		country: "Канада",
		photo: "https://placekitten.com/205/305",
		interesting: true
	},
	{
		title: "Темний лицар",
		year: 2008,
		mainActor: "Крістіан Бейл",
		genre: "Бойовик",
		country: "США",
		photo: "https://placekitten.com/206/306",
		interesting: false
	},
	{
		title: "Аватар",
		year: 2009,
		mainActor: "Сем Вортінгтон",
		genre: "Наукова фантастика",
		country: "Канада",
		photo: "https://placekitten.com/207/307",
		interesting: true
	},
	{
		title: "Суди над Чикаго 7",
		year: 2020,
		mainActor: "Саша Барон Коен",
		genre: "Драма",
		country: "США",
		photo: "https://placekitten.com/208/308",
		interesting: false
	},
	{
		title: "Брама: Спадкоємиця",
		year: 2018,
		mainActor: "Тараджі П. Хенсон",
		genre: "Жахи",
		country: "Канада",
		photo: "https://placekitten.com/209/309",
		interesting: false
	},
	{
		title: "Шоу Трумана",
		year: 1998,
		mainActor: "Джим Керрі",
		genre: "Комедія",
		country: "США",
		photo: "https://placekitten.com/210/310",
		interesting: true
	},
	{
		title: "Матриця",
		year: 1999,
		mainActor: "Кіану Рівз",
		genre: "Наукова фантастика",
		country: "США",
		photo: "https://placekitten.com/211/311",
		interesting: false
	},
	{
		title: "Зелена книга",
		year: 2018,
		mainActor: "Вігго Мортенсен",
		genre: "Драма",
		country: "США",
		photo: "https://placekitten.com/212/312",
		interesting: false
	},
	{
		title: "Шоу Спліт",
		year: 2016,
		mainActor: "Джеймс МакЭвой",
		genre: "Трилер",
		country: "Франція",
		photo: "https://placekitten.com/213/313",
		interesting: true
	},
	{
		title: "Ефект бабочки",
		year: 2004,
		mainActor: "Ештон Кутчер",
		genre: "Трилер",
		country: "США",
		photo: "https://placekitten.com/214/314",
		interesting: false
	},
	{
		title: "Амелі",
		year: 2001,
		mainActor: "Одри Тоту",
		genre: "Романтика",
		country: "Франція",
		photo: "https://placekitten.com/215/315",
		interesting: false
	},
	{
		title: "Шрек",
		year: 2001,
		mainActor: "Майк Майерс",
		genre: "Анімація",
		country: "Франція",
		photo: "https://placekitten.com/216/316",
		interesting: true
	},
	{
		title: "Леон",
		year: 1994,
		mainActor: "Жан Рено",
		genre: "Екшн",
		country: "Франція",
		photo: "https://placekitten.com/217/317",
		interesting: false
	},
	{
		title: "Хроніка",
		year: 2012,
		mainActor: "Дейн ДеХаан",
		genre: "Фантастика",
		country: "США",
		photo: "https://placekitten.com/218/318",
		interesting: false
	},
	{
		title: "Гаррі Поттер і філософський камінь",
		year: 2001,
		mainActor: "Деніел Редкліфф",
		genre: "Фентезі",
		country: "Великобританія",
		photo: "https://placekitten.com/219/319",
		interesting: true
	},
	{
		title: "Месники: Завершення",
		year: 2019,
		mainActor: "Роберт Дауні-молодший",
		genre: "Екшн",
		country: "Франція",
		photo: "https://placekitten.com/220/320",
		interesting: true
	}
];
const itemPerPage = 3;

function App() {
	const [activeCountry, setActiveCountry] = useState("США");
	const filteredMovies = movies.filter((item => item.country === activeCountry))
	const [currentPage, setCurrentPage] = useState(1);
	const startIndex = (currentPage - 1) * itemPerPage;
	const endIndex = startIndex + itemPerPage;
	const currentMovies = movies.slice(startIndex, endIndex)
	return (
		<div className="App">
			<button onClick={() => setCurrentPage(currentPage - 1)}>Попередня сторінка</button>
			<button onClick={() => setCurrentPage(currentPage + 1)}>Наступна сторінка</button>
			<div className={'card-container'}>
				{
					currentMovies.map((value, index) => (<FilmCard items={value} key={index} />))
				}

			</div>
		</div>
	);
}

export default App;
