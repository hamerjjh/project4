# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

users = []
posts = []

jonathan = User.create(
    username: "jonathanH",
    password: "jonathanH",
)
rihanna = User.create(
    username: "riri",
    password: "riri",
)
wholefoods = Post.create(
    category: "online",
    title: "Whole Foods",
    description: "Going to Whole Foods today, need me to pick you up anything?",
)
maps = Post.create(
    category: "online",
    title: "Apple Maps",
    description: "I must be using Apple Maps because I keep getting lost in your eyes"
)

starbucks = Post.create(
    category: "both",
    title: "Starbucks",
    description: "Do you work at Starbucks? Because I like you a latte.",
)
world = Post.create(
    category: "both",
    title: "Hello World",
    description: "You had me at 'Hello World'.",
)
numbers = Post.create(
    category: "online",
    title: "Number",
    description: "They say Tinder is a number's game... So can I have your number?",
)
forgot = Post.create(
    category: "in-person",
    title: "Forgot",
    description: "You're so beautiful that I forgot my pickup line",
)
laptop = Post.create(
    category: "online",
    title: "Laptop",
    description: "Hey, are you the bottom of my laptop because you're hot and im getting nervous!",
)
god = Post.create(
    category: "both",
    title: "God Made",
    description: "If God made anything prettier than you I hope he kept it for himself!",
)
potter = Post.create(
    category: "in-person",
    title: "Harry Potter",
    description: "Going to bed? Mind if I Slytherin?",
)
stark = Post.create(
    category: "both",
    title: "Stark",
    description: "I've fallen harder for you than Bran Stark.",
)