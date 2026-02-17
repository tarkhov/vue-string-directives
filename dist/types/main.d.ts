export namespace VueStringDirectives {
    function install(app: any): void;
}
import camel from './directives/camel';
import capitalize from './directives/capitalize';
import flat from './directives/flat';
import kebab from './directives/kebab';
import lower from './directives/lower';
import pad from './directives/pad';
import pascal from './directives/pascal';
import repeat from './directives/repeat';
import replace from './directives/replace';
import snake from './directives/snake';
import title from './directives/title';
import train from './directives/train';
import truncate from './directives/truncate';
import upper from './directives/upper';
import StringDirectivesMixin from './mixins/StringDirectivesMixin';
export { camel, capitalize, flat, kebab, lower, pad, pascal, repeat, replace, snake, title, train, truncate, upper, StringDirectivesMixin };
