export const componentsData = [
    {
        category: "Cards",
        categoryDescription: "Versatile containers for displaying grouped content, such as text, images, and actions, in a clean, organized format.",
        components: [
            {
                title: "Basic Card",
                description: "This is a standard card design to get you started, featuring a title and a brief body of text. " +
                    "Use this to describe simple articles or repeated features that do not require too much attention.",
                code:
`@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}`,
                link: "link here"
            },
            {
                title: "Basic Card with Image",
                description: "This is the same standard card design but now with an image header, to display a relevant photograph or image. " +
                    "Use this in applications where you want to grab the user's attention with a charming image.",
                code:
`@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}`,
                link: "link here"
            },
            {
                title: "Card with Badges",
                description: "This card features some simple chips and badges to showcase certain properties; " +
                    "such as whether the card is depicting a new release item, a sale, or even categories such as vegan or vegetarian. " +
                    "Use this to call to attention these properties on the main card.",
                code:
`@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}`,
                link: "link here"
            },
            {
                title: "Video Card",
                description: "This is a simple example card design inspired by Google's YouTube video cards; " +
                    "with a thumbnail image, time-stamp, title and statistics summary text. " +
                    "This can be of use if you plan to incorporate video browsing into your application.",
                code:
`@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}`,
                link: "link here"
            }
        ]
    },
    {
        category: "Authentication",
        categoryDescription: "Components designed for user login, registration, and password recovery, ensuring secure access to applications.",
        components: [
            {
                title: "Basic Authentication",
                description: "Basic Authentication",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "link here"
            }
        ]
    },
    {
        category: "Indicators",
        categoryDescription: "Visual cues like progress bars, spinners, and badges that convey status, progress, or notifications to the user.",
        components: [
            {
                title: "Basic Authentication",
                description: "Basic Authentication",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "link here"
            }
        ]
    },
    {
        category: "Timeline",
        categoryDescription: "Sequential layouts for showcasing chronological events or steps in a process, often used in history or progress tracking.",
        components: [
            {
                title: "Basic Authentication",
                description: "Basic Authentication",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "link here"
            }
        ]
    },
    {
        category: "Music Player",
        categoryDescription: "Interfaces for controlling audio playback, featuring controls for play, pause, skip, volume, and track information display.",
        components: [
            {
                title: "Basic Authentication",
                description: "Basic Authentication",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "link here"
            }
        ]
    },
    {
        category: "Chips",
        categoryDescription: "Small, interactive elements representing tags, categories, or actions, often used for filtering or selection in a compact format.",
        components: [
            {
                title: "Basic Authentication",
                description: "Basic Authentication",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "link here"
            }
        ]
    },
];