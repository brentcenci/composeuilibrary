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
fun Comment(userImage: String) {
    val imageLoader = remember { ImageLoader(context = PlatformContext.INSTANCE) }
    val textValue = remember { mutableStateOf("") }
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).padding(20.dp)) {
        Column(
            modifier = Modifier.width(400.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                modifier = Modifier.width(400.dp)
            ) {
                AsyncImage(
                    model = userImage,
                    contentDescription = "Placeholder",
                    imageLoader = imageLoader,
                    modifier = Modifier.size(48.dp).clip(RoundedCornerShape(50)),
                    contentScale = ContentScale.Crop
                )
                OutlinedTextField(
                    value = textValue.value,
                    onValueChange = { textValue.value = it },
                    shape = RoundedCornerShape(20.dp),
                    placeholder = { Text("Add comment...") },
                    /*colors = TextFieldDefaults.colors(focusedContainerColor = Color.LightGray.copy(alpha = 0.2f), unfocusedContainerColor = Color.LightGray.copy(alpha=0.4f)),*/
                    modifier = Modifier.fillMaxWidth()
                )
            }
            Row {
                Spacer(modifier = Modifier.weight(1f))
                Button(onClick = {}) {
                    Text("Post")
                }
            }
        }
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
fun CommentStyleTwo(userImage: String, userName: String) {
    val imageLoader = remember { ImageLoader(context = PlatformContext.INSTANCE) }
    val textValue = remember { mutableStateOf("") }
    Box(modifier = Modifier.background(Color.White, RoundedCornerShape(20.dp)).padding(20.dp)) {
        Column(
            modifier = Modifier.width(400.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                modifier = Modifier.width(400.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                AsyncImage(
                    model = userImage,
                    contentDescription = "Placeholder",
                    imageLoader = imageLoader,
                    modifier = Modifier.size(32.dp).clip(RoundedCornerShape(50)),
                    contentScale = ContentScale.Crop
                )
                Text(text = userName, fontSize = 20.sp, color = Color.DarkGray)
                Spacer(modifier = Modifier.weight(1f))
                Button(onClick = {}) {
                    Text("Post")
                }
            }
            OutlinedTextField(
                value = textValue.value,
                onValueChange = { textValue.value = it },
                shape = RoundedCornerShape(20.dp),
                placeholder = { Text("Add comment...") },
                modifier = Modifier.fillMaxWidth(),
            )
        }
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
fun StarRatingBar(
    modifier: Modifier = Modifier,
    size: Dp = 48.dp,
    ratingState: MutableState<Int> = remember { mutableIntStateOf(1) },
    imageVector: ImageVector = Icons.Default.Star,
    selectedColor: Color = Color.Yellow,
    unselectedColor: Color = Color.LightGray,
    clickable: Boolean = true,
) {
    Row(modifier = modifier) {
        for (value in 1..5) {
            StarIcon(
                size = size,
                ratingState = ratingState,
                imageVector = imageVector,
                ratingValue = value,
                selectedColor = selectedColor,
                unselectedColor = unselectedColor,
                clickable = clickable
            )
        }
    }
}

@Composable
fun StarIcon(
    size: Dp,
    ratingState: MutableState<Int>,
    imageVector: ImageVector,
    ratingValue: Int,
    selectedColor: Color,
    unselectedColor: Color,
    clickable: Boolean = true
) {
    val tint by animateColorAsState(
        targetValue = if (ratingValue <= ratingState.value) selectedColor else unselectedColor,
        label = ""
    )

    Icon(
        imageVector = imageVector,
        contentDescription = null,
        modifier = Modifier
            .size(size)
            .clickable(enabled = clickable) {
                ratingState.value = ratingValue
            },
        tint = tint
    )
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=starratingbar",
                size: 300,
            },
            {
                title: "Review Post with Star Rating Bar",
                description: "This is a sample component featuring a star rating bar, " +
                    "as well as basic information allowing the user to enter both a rating and a custom comment attached to their review, and then submit." +
                    "This kind of component may be particularly valuable as a modal, which appears after the user has made a purchase or completed some kind of media.",
                code: `
@Composable
fun StarRatingPostReview(title: String, subtitle: String) {
    val textValue = remember { mutableStateOf("") }
    Box(modifier = Modifier.width(400.dp).background(Color.White, RoundedCornerShape(20.dp)).padding(20.dp)) {
        Column(horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(20.dp)) {
            Text(
                text = title,
                fontSize = 24.sp,
                color = Color.DarkGray,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = subtitle,
                fontSize = 16.sp,
                color = Color.DarkGray,
                textAlign = TextAlign.Center
            )
            StarRatingBar(modifier = Modifier.align(Alignment.CenterHorizontally), selectedColor = Color.Blue)
            OutlinedTextField(
                value = textValue.value,
                onValueChange = { textValue.value = it },
                shape = RoundedCornerShape(20.dp),
                placeholder = { Text("Leave a comment...") },
                modifier = Modifier.fillMaxWidth(),
            )
            Row {
                Spacer(modifier = Modifier.weight(1f))
                Button(onClick = { }) {
                    Text("Submit Review")
                }
            }
        }
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=starratingpostreview"
            },
            {
                title: "Review with a Star Rating",
                description: "This is an example component displaying a user with their rating given for a product or media, with a comment. " +
                    "You can use this in any scenario where you display existing reviews.",
                code: `
@Composable
fun StarRatingPostReview(title: String, subtitle: String) {
    val textValue = remember { mutableStateOf("") }
    Box(modifier = Modifier.width(400.dp).background(Color.White, RoundedCornerShape(20.dp)).padding(20.dp)) {
        Column(horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(20.dp)) {
            Text(
                text = title,
                fontSize = 24.sp,
                color = Color.DarkGray,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = subtitle,
                fontSize = 16.sp,
                color = Color.DarkGray,
                textAlign = TextAlign.Center
            )
            StarRatingBar(modifier = Modifier.align(Alignment.CenterHorizontally), selectedColor = Color.Blue)
            OutlinedTextField(
                value = textValue.value,
                onValueChange = { textValue.value = it },
                shape = RoundedCornerShape(20.dp),
                placeholder = { Text("Leave a comment...") },
                modifier = Modifier.fillMaxWidth(),
            )
            Row {
                Spacer(modifier = Modifier.weight(1f))
                Button(onClick = { }) {
                    Text("Submit Review")
                }
            }
        }
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=reviews&component=starratingreview",
                size: 300,
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
fun StarRatingReview(name: String, userImage: String, rating: Int, message: String) {
    val imageLoader = remember { ImageLoader(context = PlatformContext.INSTANCE) }
    Box(modifier = Modifier.width(400.dp).background(Color.White, RoundedCornerShape(20.dp)).padding(20.dp)) {
        Row {
            AsyncImage(
                model = userImage,
                contentDescription = "Placeholder",
                imageLoader = imageLoader,
                modifier = Modifier.size(32.dp).clip(RoundedCornerShape(50)),
                contentScale = ContentScale.Crop
            )
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Text(text = name, fontWeight = FontWeight.Bold, color = Color.DarkGray)
                StarRatingBar(size = 24.dp, clickable = false, ratingState = remember { mutableIntStateOf(rating) }, selectedColor = Color(255,215,0))
                Text(text = message, color = Color.DarkGray)
            }
        }
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=cards&component=basiccard"
            }
        ]
    },
    {
        category: "Accordions",
        categoryDescription: "Vertically expanding sections that expand on click to reveal more information.",
        thumbnail: "src/assets/ThumbnailAccordion.png",
        components: [
            {
                title: "Basic Accordion",
                description: "Description for basic accordion. As used in FAQs to save space when not being accessed, complete with animations on open and close.",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=accordion&component=basicaccordion"
            }
        ]
    },
    {
        category: "Carousels",
        categoryDescription: "Custom designed toggle switches to impress your users over the default.",
        thumbnail: "src/assets/ThumbnailCarousel.png",
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
                title: "Basic Toggle",
                description: "This is your standard toggle switch, with customization for width and height via the constructor. " +
                    "You can use this to allow users to switch on or off functionalities in your application wherever necessary, and it can be a great place to start if you wish to further customise your own iterations.",
                code: `
@Composable
fun BasicToggle(
    modifier: Modifier = Modifier,
    height: Int = 70,
    width: Int = 140,
    state: MutableState<Boolean> = remember { mutableStateOf(false) },
    onCheckedChange: () -> Unit = {state.value = !state.value}
) {

    val color by animateColorAsState(if (!state.value) Color.LightGray else Color(0xFF15d137))
    val thumbColor by animateColorAsState(if (!state.value) Color.DarkGray else Color.White)
    val border by animateColorAsState(if (!state.value) Color.DarkGray else Color.Transparent)

    val sizePx = with(LocalDensity.current) { (width - height).toDp().toPx() }
    val offset =
        animateIntOffsetAsState(IntOffset(x = if (!state.value) 0 else sizePx.roundToInt(), 0)).value

    Row(
        modifier = modifier
            .height(height.dp)
            .width(width.dp)
            .clip(RoundedCornerShape(height.dp))
            .background(color)
            .border(2.dp, border, RoundedCornerShape(height.dp))
            .clickable {
                onCheckedChange()
            },
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .offset { offset }
                .size(height.dp)
                .clip(RoundedCornerShape(50))
                .background(thumbColor)
        ) {}
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=toggles&component=basictoggle"
            },
            {
                title: "Basic Toggle with Content",
                description: "The child of the basic toggle component above, this component also allows you to pass in a composable that will be featured within the thumbstick of the toggle switch. " +
                    "The example below uses this feature to pass in a Text composable, however you pass in anything from an Icon to an Image, and make it responsive to the state!",
                code: `
@Composable
fun BasicToggleWithContent(
    modifier: Modifier = Modifier,
    height: Int = 70,
    width: Int = 140,
    state: MutableState<Boolean> = remember { mutableStateOf(false) },
    onCheckedChange: () -> Unit = {state.value = !state.value},
    content: @Composable () -> Unit
) {

    val color by animateColorAsState(if (!state.value) Color.LightGray else Color(0xFF15d137))
    val thumbColor by animateColorAsState(if (!state.value) Color.DarkGray else Color.White)
    val border by animateColorAsState(if (!state.value) Color.DarkGray else Color.Transparent)

    val sizePx = with(LocalDensity.current) { (width - height).toDp().toPx() }
    val offset =
        animateIntOffsetAsState(IntOffset(x = if (!state.value) 0 else sizePx.roundToInt(), 0)).value

    Row(
        modifier = modifier
            .height(height.dp)
            .width(width.dp)
            .clip(RoundedCornerShape(height.dp))
            .background(color)
            .border(2.dp, border, RoundedCornerShape(height.dp))
            .clickable {
                onCheckedChange()
            },
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .offset { offset }
                .size(height.dp)
                .clip(RoundedCornerShape(50))
                .background(thumbColor),
            contentAlignment = Alignment.Center
        ) {
            content()
        }
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=toggles&component=basictogglewithcontent"
            }
        ]
    },
    {
        category: "Expanding Sections",
        categoryDescription: "Components which expand dynamically on click horizontally - a perfect component for displaying cards which reveal more detail when pressed.",
        thumbnail: "src/assets/ThumbnailExpandingSections.png",
        components: [
            {
                title: "Basic Expanding Section",
                description: "Description for the basic expanding section.",
                code: `
@Composable
fun ExampleComponent(modifier: Modifier) {
    Box(modifier) {
        Text("hello")
        Text("world")
    }
}
                `,
                size: 700,
                link: "https://brentcenci.github.io/Campose/?category=expanding&component=expandinghorizontal"
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
        categoryDescription: "Simple horizontal components representing stages of navigation through a process.",
        thumbnail: "src/assets/ThumbnailBreadcrumbs.png",
        components: [
            {
                title: "Basic Breadcrumbs",
                description: "This is a basic implementation of a breadcrumb component to dictate the completed stages of interaction or navigation. " +
                    "You can use this in e-commerce sites or in payment screens or wherever necessary.",
                code: `
@Composable
fun BasicBreadcrumb(modifier: Modifier = Modifier, separator: String = "»", sections: List<String> = listOf("Cart", "Billing", "Shipping", "Payment")) {
    val current = remember { mutableIntStateOf(2) }
    Row(modifier = modifier, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        sections.forEachIndexed { index, section ->
            Text(
                text = section,
                fontWeight = if (index == current.value) FontWeight.Bold else FontWeight.Normal,
                color = if (current.value < index) Color.LightGray else Color.Blue,
                modifier = Modifier.clickable { current.value = index }
            )
            if (index != sections.size-1) {
                Text(separator, color = Color.LightGray)
            }
        }
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=breadcrumbs&component=basicbreadcrumb"
            }
        ]
    },
    {
        category: "Search Bars and Autocomplete",
        categoryDescription: "Simple components using Textfields that take in a query and execute search functionality, perfect for finding matching text in a database or list.",
        thumbnail: "src/assets/ThumbnailSearchbarsAndAutocomplete.png",
        components: [
            {
                title: "Basic Search Bar",
                description: "This is a super simple search bar made by stylizing the OutlinedTextField composable with a leading icon and other choice modifiers. " +
                    "It can further be stylized to customise to your wishes, however as a base line this is perfect for simple applications needing a clearly defined search bar.",
                code: `
@Composable
fun BasicSearchBar(modifier: Modifier = Modifier) {
    var value by remember { mutableStateOf("") }
    OutlinedTextField(
        value = value,
        onValueChange = { value = it },
        leadingIcon = {
            Icon(Icons.Default.Search, "Search Icon")
        },
        maxLines = 1,
        modifier = modifier
    )
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=searchbars&component=basicsearchbar"
            },
            {
                title: "Rounded Search Bar",
                description: "This is a slight level up from the previous search bar, featuring rounded edges that give it a cleaner appearance, " +
                    "a trailing icon button to allow for search options or filters to appear, and a placeholder to further convey functionality to the user. " +
                    "The same use-cases apply as above as it can be used in any application you're making that require a sleeker design, and of course it can be further customized and built upon as needed.",
                code: `
@Composable
fun RoundedSearchBar(modifier: Modifier = Modifier) {
    var value by remember { mutableStateOf("") }
    OutlinedTextField(
        value = value,
        onValueChange = { value = it },
        placeholder = {
            Text(text= "Search...")
        },
        leadingIcon = {
            Icon(Icons.Default.Search, "Search Icon")
        },
        trailingIcon = {
            IconButton(onClick = { }) {
                Icon(Icons.Default.MoreVert, "More Vert Icon")
            }
        },
        maxLines = 1,
        shape = RoundedCornerShape(50),
        modifier = modifier
    )
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=searchbars&component=roundedsearchbar"
            },
            {
                title: "Search Bar with Suggestions",
                description: "This search bar is the same as the first, however features a demonstration of how you could use this feature to live-search through a database " +
                    "or other list of terms and display possible results or suggestions below the search bar. " +
                    "This is a great starting point if you're building anything integrating with a database such as a recipe application or food logging site," +
                    "and you want the user to see possible suggestions based on their search query. The example depicted is the most simple version of this - using a" +
                    " static immutable list inside the composable to show the first five results, however integrating with database results is not difficult.",
                code: `
@Composable
fun SearchBarWithSuggestions(modifier: Modifier = Modifier) {
    var value by remember { mutableStateOf("") }
    val foods = listOf(
        "Apple", "Banana", "Carrot", "Tomato", "Potato", "Orange", "Strawberry", "Blueberry", "Broccoli", "Spinach",
        "Cucumber", "Onion", "Garlic", "Pepper", "Mushroom", "Lettuce", "Zucchini", "Eggplant", "Avocado", "Pineapple",
        "Mango", "Peach", "Pear", "Plum", "Kiwi", "Grapes", "Cherry", "Watermelon", "Cantaloupe", "Papaya",
        "Pumpkin", "Sweet Potato", "Radish", "Celery", "Asparagus", "Brussels Sprouts", "Cauliflower", "Corn", "Peas", "Green Beans",
        "Cabbage", "Kale", "Leek", "Beetroot", "Artichoke", "Bell Pepper", "Chili Pepper", "Bok Choy", "Turnip", "Parsley",
        "Rosemary", "Basil", "Thyme", "Oregano", "Cilantro", "Mint", "Dill", "Chives", "Lime", "Lemon",
        "Apricot", "Raspberry", "Blackberry", "Cranberry", "Pomegranate", "Fig", "Date", "Coconut", "Dragon Fruit", "Lychee",
        "Starfruit", "Passion Fruit", "Guava", "Tangerine", "Nectarine", "Rutabaga", "Parsnip", "Butternut Squash", "Acorn Squash", "Spaghetti Squash",
        "Yam", "Okra", "Snap Peas", "Edamame", "Fennel", "Shallot", "Scallion", "Jalapeño", "Habanero", "Serrano",
        "Chickpeas", "Lentils", "Black Beans", "Kidney Beans", "Quinoa", "Barley", "Brown Rice", "Oats", "Farro", "Couscous"
    )
    Column(modifier = modifier.width(300.dp)) {
        OutlinedTextField(
            value = value,
            onValueChange = { value = it },
            leadingIcon = {
                Icon(Icons.Default.Search, "Search Icon")
            },
            maxLines = 1,
            modifier = Modifier.fillMaxWidth()
        )
        Column(modifier = Modifier.background(Color.White)) {
            foods.filter { it.lowercase().contains(value.lowercase()) }.take(5).forEach { food ->
                HorizontalDivider()
                Row(modifier = Modifier.fillMaxWidth().clickable { value = food }.padding(5.dp)) { Text(text = food) }
            }
        }
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=searchbars&component=searchbarwithsuggestions"
            },
            {
                title: "Search Bar with Button",
                description: "This is a simple example of how you can design your search bar to include a search button, in the cases where live-searching may not be efficient or best practice. " +
                    "Such scenarios may be where you need to do a network call on each search and you don't want to run that on value change, or if you only want to update with results when the user is done with their query. " +
                    "You can use this example in those scenarios, or modify as you see fit.",
                code: `
@Composable
fun SearchBarWithButton(modifier: Modifier = Modifier) {
    var value by remember { mutableStateOf("") }
    Row(modifier = modifier.height(IntrinsicSize.Min), verticalAlignment = Alignment.CenterVertically) {
        OutlinedTextField(
            value = value,
            onValueChange = { value = it },
            placeholder = {
                Text(text= "Search...")
            },
            maxLines = 1,
            shape = RoundedCornerShape(topStart = 20.dp, bottomStart = 20.dp),
            modifier = Modifier.fillMaxHeight()
        )
        IconButton(onClick = { }, modifier = Modifier.fillMaxHeight().background(color = Color(0xFF572de0), RoundedCornerShape(topEnd = 20.dp, bottomEnd = 20.dp)))  {
            Icon(Icons.Default.Search, "Search Button Icon", tint = Color.White)
        }
    }
}
                `,
                link: "https://brentcenci.github.io/Campose/?category=searchbars&component=searchbarwithbutton"
            },

        ]
    },
];