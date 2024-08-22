export const componentsData = [
    {
        category: "Cards",
        categoryDescription: "Versatile containers for displaying grouped content, such as text, images, and actions, in a clean, organized format.",
        thumbnail: "src/assets/ThumbnailCard.png",
        components: [
            {
                title: "Basic Card",
                description: "This is a standard card design to get you started, featuring a title and a brief body of text. " +
                    "Use this to describe simple articles or repeated features that do not require too much attention.",
                code:
                    `@Composable
fun Card(modifier: Modifier = Modifier, title: String, content: String) {
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).width(300.dp).padding(20.dp)) {
        Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
            Text(text = title, fontSize = 28.sp, color = Color.DarkGray, fontWeight = FontWeight.Bold)
            Text(text = content, color = Color.DarkGray)
        }
    }
}`,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard",
                height: 200
            },
            {
                title: "Basic Card with Image",
                description: "This is the same standard card design but now with an image header, to display a relevant photograph or image. " +
                    "Use this in applications where you want to grab the user's attention with a charming image.",
                code:
                    `@Composable
fun ImageCard(title: String, content: String, imageUrl: String) {
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).width(300.dp).padding(20.dp)) {
        Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
            AsyncImage(
                model = imageUrl,
                contentDescription = "Placeholder",
                imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                modifier = Modifier.fillMaxWidth().height(200.dp).clip(RoundedCornerShape(10.dp)),
                contentScale = ContentScale.Crop
            )
            Spacer(modifier = Modifier.height(16.dp))
            Text(text = title, fontSize = 28.sp, color = Color.DarkGray, fontWeight = FontWeight.Bold)
            Text(text = content, color = Color.DarkGray)
        }
    }
}`,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=imagecard"
            },
            {
                title: "Card with Badges",
                description: "This card features some simple chips and badges to showcase certain properties; " +
                    "such as whether the card is depicting a new release item, a sale, or even categories such as vegan or vegetarian. " +
                    "Use this to call to attention these properties on the main card.",
                code:
                    `@Composable
fun ImageCardWithBadges(title: String, content: String, imageUrl: String, titleBadge: String, contentBadges: List<String>) {
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).width(300.dp).padding(20.dp)) {
        Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
            AsyncImage(
                model = imageUrl,
                contentDescription = "Placeholder",
                imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                modifier = Modifier.fillMaxWidth().height(200.dp).clip(RoundedCornerShape(10.dp)),
                contentScale = ContentScale.Crop
            )
            Spacer(modifier = Modifier.height(16.dp))
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                Text(text = title, fontSize = 28.sp, color = Color.DarkGray, fontWeight = FontWeight.Bold)
                Box(modifier = Modifier.border(width = 2.dp, Color.Red, RoundedCornerShape(50)).padding(horizontal = 6.dp, vertical = 4.dp)) {
                    Text(text = titleBadge, color = Color.Red, fontSize = 16.sp)
                }
            }
            Text(text = content, color = Color.DarkGray)
            Row(horizontalArrangement = Arrangement.spacedBy(4.dp), modifier = Modifier.padding(top = 16.dp)) {
                Spacer(modifier = Modifier.weight(1f))
                contentBadges.forEach {
                    Box(modifier = Modifier.background(Color.hsl(267F, 1f, 0.4f), RoundedCornerShape(50)).padding(4.dp)){
                        Text(text = it, color = Color.White)
                    }
                }
            }
        }
    }
}`,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=imagecardwithbadges"
            },
            {
                title: "Card with Button",
                description: "This card is the same as the image card however now features a simple but attention-grabbing button, " +
                    "perfect for any desired call to action.",
                code:
                    `@Composable
fun ImageCardWithButton(title: String, content: String, imageUrl: String, buttonText: String) {
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).width(300.dp).padding(20.dp)) {
        Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
            AsyncImage(
                model = imageUrl,
                contentDescription = "Placeholder",
                imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                modifier = Modifier.fillMaxWidth().height(200.dp).clip(RoundedCornerShape(10.dp)),
                contentScale = ContentScale.Crop
            )
            Spacer(modifier = Modifier.height(16.dp))
            Text(text = title, fontSize = 28.sp, color = Color.DarkGray, fontWeight = FontWeight.Bold)
            Text(text = content, color = Color.DarkGray)
            Button( onClick = {}, modifier = Modifier.align(Alignment.End).padding(top = 16.dp), shape = RoundedCornerShape(10.dp)) {
                Text(text = buttonText)
            }
        }
    }
}`,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=imagecardwithbutton"
            },
            {
                title: "Small Card with Side Image",
                description: "This is a simple alternative card design, particularly useful for scenarios where you need to display many cards all together, " +
                    "where each is just a quick snapshot. " +
                    "Specific use cases could be for menu applications to depict a thumbnail of the food, with a title and brief description.",
                code:
                    `@Composable
fun CardWithSideImage(title: String, content: String, imageUrl: String) {
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).width(300.dp)) {
        Row(modifier = Modifier.clip(RoundedCornerShape(20.dp))) {
            AsyncImage(
                model = imageUrl,
                contentDescription = "Placeholder",
                imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                modifier = Modifier.size(100.dp),
                contentScale = ContentScale.Crop
            )
            Column(modifier = Modifier.padding(20.dp), verticalArrangement = Arrangement.Center) {
                Text(text = title, fontSize = 24.sp, color = Color.DarkGray, fontWeight = FontWeight.Bold)
                Text(text = content, color = Color.DarkGray)
            }
        }
    }
}`,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=cardwithsideimage"
            },
            {
                title: "Youtube-Styled Video Card",
                description: "This is a simple example card design inspired by Google's YouTube video cards; " +
                    "with a thumbnail image, time-stamp, title and statistics summary text. " +
                    "This can be of use if you plan to incorporate video browsing into your application.",
                code:
                    `@Composable
fun VideoCardYoutubeStyle(title: String, authorName: String, authorImage: String, views: String, time: String, length: String, imageUrl: String) {
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).padding(20.dp)) {
        Column(modifier = Modifier.width(400.dp)) {
            Box(modifier = Modifier.padding(bottom = 8.dp)) {
                AsyncImage(
                    model = imageUrl,
                    contentDescription = "Placeholder",
                    imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                    modifier = Modifier.size(height = 240.dp, width = 400.dp).clip(RoundedCornerShape(10.dp)),
                    contentScale = ContentScale.Crop
                )
                Text(
                    text = length,
                    color = Color.White,
                    modifier = Modifier.padding(6.dp).background(Color.Black.copy(alpha= 0.6f), RoundedCornerShape(2.dp)).align(Alignment.BottomEnd).padding(4.dp)
                )
            }
            Row {
                AsyncImage(
                    model = authorImage,
                    contentDescription = "Placeholder",
                    imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                    modifier = Modifier.size(24.dp).clip(RoundedCornerShape(50)),
                    contentScale = ContentScale.Crop
                )
                Column(modifier = Modifier.padding(start = 8.dp).weight(1f)) {
                    Text(text = title, fontSize = 18.sp, color = Color.DarkGray, fontWeight = FontWeight.Bold)
                    Text(text = authorName, color = Color.DarkGray)
                    Row {
                        Text(text = "$views · $time" , color = Color.DarkGray)
                    }
                }
            }
        }
    }
}`,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=videocardyoutubestyle"
            },
            {
                title: "Video Card",
                description: "An alternative video card design which depicts the length of the video, the author/owner of the video, as well as a title and brief description. " +
                    "Use this in your project or just take inspiration to design your own video cards to use if your applications!",
                code:
                    `@Composable
fun VideoCard(title: String, summary: String, length: String, imageUrl: String, authorImage: String, authorName: String) {
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp))) {
        Column(modifier = Modifier.width(400.dp)) {
            Box {
                AsyncImage(
                    model = imageUrl,
                    contentDescription = "Placeholder",
                    imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                    modifier = Modifier.size(height = 240.dp, width = 400.dp).clip(RoundedCornerShape(topStart = 20.dp, topEnd = 20.dp)),
                    contentScale = ContentScale.Crop
                )
                Text(
                    text = length,
                    color = Color.White,
                    modifier = Modifier.padding(6.dp).background(Color.Black.copy(alpha= 0.6f), RoundedCornerShape(50)).align(Alignment.BottomStart).padding(8.dp),
                )
                Row(
                    modifier = Modifier.padding(6.dp).background(Color.Black.copy(alpha= 0.6f), RoundedCornerShape(50)).align(Alignment.BottomEnd).padding(8.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    AsyncImage(
                        model = authorImage,
                        contentDescription = "Placeholder",
                        imageLoader = ImageLoader(context = PlatformContext.INSTANCE),
                        modifier = Modifier.size(16.dp).clip(RoundedCornerShape(50)),
                        contentScale = ContentScale.Crop
                    )
                    Text(text = authorName, color = Color.White)
                }
            }
            Column(modifier = Modifier.padding(20.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Text(text = title, fontSize = 18.sp, color = Color.DarkGray, fontWeight = FontWeight.Bold, maxLines = 1, overflow = TextOverflow.Ellipsis)
                Text(text = summary, color = Color.DarkGray, maxLines = 3, overflow = TextOverflow.Ellipsis)
            }
        }
    }
}`,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=videocard"
            },
        ]
    },
    {
        category: "Comments and Reviews",
        categoryDescription: "A selection of complete components and elements that may be found in comment sections or review areas of an application. " +
            "They should be used to provide the opportunity for users to give their thoughts on a piece of content or media.",
        thumbnail: "src/assets/ThumbnailCommentsReview.png",
        components: [
            {
                title: "Basic Comment",
                description: "This is a basic comment component where users can leave a simple post behind on media. " +
                    "The component features a user icon image, textfield and submission button.",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=comment"
            },
            {
                title: "Alternative Comment",
                description: "This is an alternative to the above basic comment component, where the username and user icon image are both displayed. " +
                    "This should be used in the same scenario as above, where the user is leaving a comment behind on a piece of media. " +
                    "You may want to use this to highlight the user's details, and as such should be paired with a posted comment component featuring such details.",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=commentstyletwo"
            },
            {
                title: "Star Rating Bar",
                description: "This is a simple example of a Star Rating Bar component, in which the user can select a rating between 1 and 5 stars. " +
                    "The colours, size and spacing etc. are customizable using the above component, and further customization can be achieved by altering this code. " +
                    "This sort of feature fits in any kind of review scenario, where you need to query what rating a user would give toward a product or service.",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=starratingbar"
            },
            {
                title: "Review Post with Star Rating Bar",
                description: "This is a sample component featuring a star rating bar, " +
                    "as well as basic information allowing the user to enter both a rating and a custom comment attached to their review, and then submit." +
                    "This kind of component may be particularly valuable as a modal, which appears after the user has made a purchase or completed some kind of media.",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=starratingpostreview"
            },
            {
                title: "Review with a Star Rating",
                description: "Description for a Review with Star Rating Component",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=starratingreview"
            },
        ]
    },
    {
        category: "Authentication",
        categoryDescription: "Components designed for user login, registration, and password recovery, ensuring secure access to applications.",
        thumbnail: "src/assets/ThumbnailAuthentication.png",
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
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
    {
        category: "Toggles",
        categoryDescription: "Custom designed toggle switches to impress your users over the default.",
        thumbnail: "src/assets/ThumbnailToggles.png",
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
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
    {
        category: "Timeline",
        categoryDescription: "Sequential layouts for showcasing chronological events or steps in a process, often used in history or progress tracking.",
        thumbnail: "src/assets/ThumbnailTimeline.png",
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
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
    {
        category: "Media Control",
        categoryDescription: "Interfaces for controlling audio playback, featuring controls for play, pause, skip, volume, and track information display.",
        thumbnail: "src/assets/ThumbnailMediaControl.png",
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
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
    {
        category: "Badges",
        categoryDescription: "Small, interactive elements representing tags, categories, or actions, often used for filtering or selection in a compact format.",
        thumbnail: "src/assets/ThumbnailBadges.png",
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
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
    {
        category: "Breadcrumbs",
        categoryDescription: "Small, interactive elements representing tags, categories, or actions, often used for filtering or selection in a compact format.",
        thumbnail: "src/assets/ThumbnailBreadcrumbs.png",
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
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
    {
        category: "Search Bars and Autocomplete",
        categoryDescription: "Small, interactive elements representing tags, categories, or actions, often used for filtering or selection in a compact format.",
        thumbnail: "src/assets/ThumbnailSearchbarsAndAutocomplete.png",
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
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
];