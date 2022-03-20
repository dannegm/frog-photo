import Shell from '@components/Shell';
import { sequence } from '@utils/helpers';

const elements = sequence(50);

const App = () => (
    <Shell>
        {elements.map((i) => (
            <div key={`item_${i}`}>
                <p>Item #${i}</p>
            </div>
        ))}
    </Shell>
);

export default App;
