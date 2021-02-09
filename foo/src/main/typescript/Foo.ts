export default class Foo {
    bar: Bar;   // IDEA only knows this type with a proper Gradle dependency to module :bar
}
