import { Movies } from './movieLinks';
import { Speaches } from './speachesLinks';
import { Books } from './bookLinks';
import { Arguments } from './Arguments';
import { ProteinMyths } from './ProteinMyths';
import { News } from './NewsLinks';
import { Jobs } from './JobsLink';
import { SubReddits } from './RedditLinks';
import { FaceBook } from './FaceBookLinks';
import { Nutrition } from './NutritionLinks';
import { Discord } from './DiscordLinks';
import { Recipes } from './RecipeLinks';
import { Activism } from './ActivismLinks';
import { Studies } from './Studies';
import { VegansOfColor } from './VegansOfColor';
import { Statistics } from './StatiticLinks';
import { Celebrities } from './Celebrities';
import { Apps } from './AppLinks';
import { Podcasts } from './PodcastLinks';
import { Resturants } from './ResturantLinks';
import { CompanionAnimals } from './CompanionAnimalLinks';
import { Fashion } from './FashionLinks';
import { Blogs } from './BlogLinks';
import { AboutSections } from './AboutSections';


export const allLinks =
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
        ...Resturants,
        ...CompanionAnimals,
        ...Fashion,
        ...Blogs,
    ]

   // allLinks.forEach( (el, index) => el.id = index )
