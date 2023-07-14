class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :null_session
    # commented for testing with postman
    before_action :authorized

    def authorized
        return render json: { error: "User is not Authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def admin_user
        user = User.find_by_id(session[:user_id])
        return render json: { error: "User is not admin" }, status: :unauthorized unless user.admin? 
    end
end
