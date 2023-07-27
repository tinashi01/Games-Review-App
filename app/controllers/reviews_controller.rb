class ReviewsController < ApplicationController
    wrap_parameters format: []
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized, only: :index

    def index
        if params[:user_id]
            user = User.find_by_id(session[:user_id])
            reviews = user.reviews
        elsif params[:game_id]
            game = Game.find_by_id(params[:game_id])
            reviews = game.reviews
        else
            reviews = Review.all
        end
        render json: reviews, include: :user

    end

    # def show
    #     review = Review.find(params[:id])
    #     render json: review, include: :user
    # end
    
    def create

        review = Review.create(heading: params[:heading], comment: params[:comment], rating: params[:rating], user_id: session[:user_id], game_id: params[:game_id])
        
        if review.valid?
            render json: review, status: :created
        else
            render json: {error: "Error in creating review"}, status: :unprocessable_entity
        end
    end

    def update
        review = Review.find(params[:id])

        review.update!(review_params)

        render json: review
    end

    def destroy

        review = Review.find_by(id: params[:id])

        if review
            review.destroy
            head :no_content
        else
            render json: {error: "Review not found"}, status: :not_found
        end

    end


    private

    def render_not_found_response
        render json: {error: "Review not found"}, status: :not_found
        # No Reviews!
    end

    def review_params
        params.permit(:heading, :comment, :rating)
    end
end
