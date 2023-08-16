import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Content from './components/Content';
import CategoryCard from './components/CategoryCard';
import MenuModal from './components/MenuModal';
import Footer from './components/Footer';
import { Movies } from './data/movieLinks';
import { Speaches } from './data/speachesLinks';
import { Books } from './data/bookLinks';
import { Arguments } from './data/Arguments';
import { ProteinMyths } from './data/ProteinMyths';
import { News } from './data/NewsLinks';
import { Jobs } from './data/JobsLink';
import { SubReddits } from './data/RedditLinks';
import { FaceBook } from './data/FaceBookLinks';
import { Nutrition } from './data/NutritionLinks';
import { Discord } from './data/DiscordLinks';
import { Recipes } from './data/RecipeLinks';
import { Activism } from './data/ActivismLinks';
import { Studies } from './data/Studies';
import { VegansOfColor } from './data/VegansOfColor';
import { Statistics } from './data/StatiticLinks';
import { Celebrities } from './data/Celebrities';
import { Apps } from './data/AppLinks';
import { Podcasts } from './data/PodcastLinks';

function App() {

const allLinks =
[
  ...Movies,
  ...Speaches,
  ...Books,
  ...Arguments,
  ...ProteinMyths,
  ...News,
  ...Jobs,
  ...SubReddits,
  ...FaceBook,
  ...Nutrition,
  ...Discord,
  ...Recipes,
  ...Activism,
  ...Studies,
  ...VegansOfColor,
  ...Statistics,
  ...Celebrities,
  ...Apps,
  ...Podcasts,
]

const [ menuModal, setMenuModal] = useState(false)
const [content, setContent] = useState([])


  return (
    <div className="App">
      <Header />
      <Content content={content} setContent={setContent} allLinks={allLinks} />
      <Footer menuModal={menuModal} setMenuModal={setMenuModal} content={content} setContent={setContent} allLinks={allLinks} />
    </div>
  );
}

export default App;
